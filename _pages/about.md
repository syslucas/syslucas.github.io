---
layout: about
title: About
permalink: /
subtitle: Master's student in Computer Science at Xiamen University
homepage_enhanced: true
math: false
masonry: false
medium_zoom: false

profile:
  align: right
  image: profile.png
  image_circular: false
  more_info: >
    <p>Xiamen, China</p>
    <p>gydeng.cs [AT] gmail.com</p>

selected_papers: false
social: false

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: true
  scrollable: false
  limit: 3
---

<section class="home-hero reveal-on-scroll">
  <div class="hero-copy">
    <p class="hero-lead">
      I am a second-year master's student at <a href="https://www.xmu.edu.cn/">Xiamen University</a>, advised by
      <a href="https://shenzr.github.io/">Prof. Zhirong Shen</a>. Before joining XMU, I received my B.Eng. in Computer
      Science from <a href="https://www.tjut.edu.cn/">Tianjin University of Technology</a>.
    </p>
    <div class="interest-cloud">
      <span class="interest-chip">LLM Training Acceleration</span>
      <span class="interest-chip">Disaggregated Memory</span>
      <span class="interest-chip">RDMA Networks</span>
      <span class="interest-chip">Memory Indexing</span>
    </div>
    <p class="hero-axiom">The fastest path is the one that moves the least and waits the least.</p>
  </div>
</section>

<section class="home-section home-section-priority home-news-section">
  <div class="section-heading reveal-on-scroll">
    <p class="eyebrow">Updates</p>
    <h3>News</h3>
  </div>
  {% include news.liquid limit=true %}
</section>

<section class="home-section home-section-priority">
  <div class="section-heading reveal-on-scroll">
    <p class="eyebrow">Selected Work</p>
    <h3>Publications</h3>
  </div>
  <div class="publications featured-publications">
    {% bibliography --group_by none --query @*[selected=true]* %}
  </div>
</section>

<section class="quick-facts">
  <div class="fact-card reveal-on-scroll">
    <span class="fact-label">Focus</span>
    <strong>Systems and Architecture</strong>
    <p>Research on memory indexing, high-speed interconnects, and data-intensive infrastructure.</p>
  </div>
  <div class="fact-card reveal-on-scroll">
    <span class="fact-label">Current</span>
    <strong>Xiamen University</strong>
    <p>M.S. student in Computer Science, working on efficient system support for modern workloads.</p>
  </div>
  <div class="fact-card reveal-on-scroll">
    <span class="fact-label">Output</span>
    <strong>Publications and Open Source</strong>
    <p>Papers at ISCA, HPCA, and SC, with code and systems work that can be inspected directly.</p>
  </div>
</section>

<section class="home-section">
  <div class="section-heading reveal-on-scroll">
    <p class="eyebrow">Highlights</p>
    <h3>What I work on</h3>
  </div>
  <div class="highlight-grid">
    <article class="highlight-panel reveal-on-scroll">
      <h4>Training Systems</h4>
      <p>Accelerating LLM training workloads with better data movement, resource scheduling, and hardware-software coordination.</p>
    </article>
    <article class="highlight-panel reveal-on-scroll">
      <h4>Disaggregated Memory</h4>
      <p>Designing indexing structures and access paths that stay efficient when memory is remote and network-attached.</p>
    </article>
    <article class="highlight-panel reveal-on-scroll">
      <h4>RDMA Networks</h4>
      <p>Studying how low-latency network primitives reshape synchronization, memory access, and throughput-sensitive services.</p>
    </article>
    <article class="highlight-panel reveal-on-scroll">
      <h4>Storage Structures</h4>
      <p>Exploring hashing indexes and practical system tradeoffs under real workload pressure.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="section-heading reveal-on-scroll">
    <p class="eyebrow">Education</p>
    <h3>Academic background</h3>
  </div>
  <div class="timeline-list">
    <article class="timeline-item reveal-on-scroll">
      <div class="timeline-meta">2024 - 2027</div>
      <div class="timeline-body">
        <h4>M.S. in Computer Science</h4>
        <p>Xiamen University</p>
      </div>
    </article>
    <article class="timeline-item reveal-on-scroll">
      <div class="timeline-meta">2020 - 2024</div>
      <div class="timeline-body">
        <h4>B.Eng. in Computer Science</h4>
        <p>Tianjin University of Technology</p>
      </div>
    </article>
  </div>
</section>

<section class="home-section achievement-section">
  <div class="achievement-column">
    <div class="section-heading reveal-on-scroll">
      <p class="eyebrow">Recognition</p>
      <h3>Honors</h3>
    </div>
    <div class="achievement-grid">
      <article class="achievement-card reveal-on-scroll">
        <h4>National Scholarships</h4>
        <p>Ministry of Education, China</p>
        <span>2022</span>
      </article>
      <article class="achievement-card reveal-on-scroll">
        <h4>Excellent Student of Tianjin</h4>
        <p>Tianjin Municipal Education Commission, China</p>
        <span>2022</span>
      </article>
      <article class="achievement-card reveal-on-scroll">
        <h4>Tianjin Municipal Government Scholarship</h4>
        <p>Tianjin Municipal People's Government, China</p>
        <span>2021</span>
      </article>
    </div>
  </div>
  <div class="achievement-column">
    <div class="section-heading reveal-on-scroll">
      <p class="eyebrow">Contests</p>
      <h3>Competitions</h3>
    </div>
    <div class="achievement-grid">
      <article class="achievement-card reveal-on-scroll">
        <h4>ICPC Asia Xi'an Regional Contest</h4>
        <p>Silver Medal</p>
        <span>2023</span>
      </article>
      <article class="achievement-card reveal-on-scroll">
        <h4>China Collegiate Programming Contest Weihai Site</h4>
        <p>Bronze Medal</p>
        <span>2022</span>
      </article>
      <article class="achievement-card reveal-on-scroll">
        <h4>Chinese Collegiate Computer Design Competition</h4>
        <p>Second Prize</p>
        <span>2023</span>
      </article>
    </div>
  </div>
</section>
