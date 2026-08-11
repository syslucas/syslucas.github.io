---
layout: page
permalink: /repositories/
title: Repositories
description: Most active GitHub repositories.
nav: true
nav_order: 5
---

{% assign github_username = site.data.repositories.github_username %}
{% assign repo_count = site.data.repositories.active_repo_count | default: 6 %}
{% assign max_lines = site.data.repositories.repo_description_lines_max | default: 2 %}
{% assign repo_theme_light = site.repo_theme_light %}
{% assign repo_theme_dark = site.repo_theme_dark %}
{% assign repo_stats_url = site.external_services.github_readme_stats_url %}

<div
  id="active-repositories"
  class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center"
  data-github-username="{{ github_username }}"
  data-repo-count="{{ repo_count }}"
  data-max-lines="{{ max_lines }}"
  data-theme-light="{{ repo_theme_light }}"
  data-theme-dark="{{ repo_theme_dark }}"
  data-stats-url="{{ repo_stats_url }}"
>
  <p class="repo-status">Loading active repositories...</p>
</div>

{% if site.data.repositories.github_repos %}
<noscript>

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  </div>
</noscript>
{% endif %}

<script>
  (() => {
    const container = document.getElementById('active-repositories');
    if (!container) return;

    const username = container.dataset.githubUsername;
    const repoCount = Number.parseInt(container.dataset.repoCount || '6', 10);
    const maxLines = Number.parseInt(container.dataset.maxLines || '2', 10);
    const themeLight = container.dataset.themeLight;
    const themeDark = container.dataset.themeDark;
    const statsUrl = container.dataset.statsUrl;
    const locale = document.documentElement.lang === 'zh-CN' ? 'cn' : 'en';
    const fallbackRepos = [{% for repo in site.data.repositories.github_repos %}"{{ repo }}"{% unless forloop.last %}, {% endunless %}{% endfor %}];

    const renderRepos = (repos) => {
      container.innerHTML = '';

      repos.forEach((fullName) => {
        const [owner, repo] = fullName.split('/');
        const item = document.createElement('div');
        item.className = 'repo p-2 text-center';
        item.innerHTML = `
          <a href="https://github.com/${fullName}" rel="external nofollow noopener" target="_blank">
            <img
              class="only-light w-100"
              alt="${fullName}"
              src="${statsUrl}/api/pin/?username=${owner}&repo=${repo}&theme=${themeLight}&locale=${locale}&show_owner=false&description_lines_count=${maxLines}"
            >
            <img
              class="only-dark w-100"
              alt="${fullName}"
              src="${statsUrl}/api/pin/?username=${owner}&repo=${repo}&theme=${themeDark}&locale=${locale}&show_owner=false&description_lines_count=${maxLines}"
            >
          </a>
        `;
        container.appendChild(item);
      });
    };

    const renderFallback = () => {
      if (fallbackRepos.length > 0) {
        renderRepos(fallbackRepos);
      } else {
        container.innerHTML = '<p class="repo-status">Unable to load repositories right now.</p>';
      }
    };

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub API request failed: ${response.status}`);
        return response.json();
      })
      .then((repos) => {
        const activeRepos = repos
          .filter((repo) => !repo.fork && !repo.archived && !repo.disabled)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, repoCount)
          .map((repo) => repo.full_name);

        if (activeRepos.length === 0) {
          renderFallback();
          return;
        }

        renderRepos(activeRepos);
      })
      .catch(() => {
        renderFallback();
      });
  })();
</script>
