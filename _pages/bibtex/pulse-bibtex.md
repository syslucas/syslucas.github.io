---
layout: single
title: "Pulse BibTeX"
permalink: /bibtex/pulse-bibtex/
author_profile: false
---

## BibTeX Entry

<button onclick="copyBibtex()" class="btn btn--primary" style="margin-bottom: 1em;">
  <i class="fas fa-clipboard"></i> Copy BibTeX
</button>

```bibtex
@inproceedings{deng2026pulse,
  title={Pulse: Fine-Grained Hierarchical Hashing Index for Disaggregated Memory},
  author={Deng, Guangyang and Yu, Zixiang and Shen, Zhirong and Su, Qiangsheng and Shu, Jiwu},
  booktitle={IEEE International Symposium on High-Performance Computer Architecture (HPCA)},
  year={2026}
}
```

<div id="copy-success" style="display: none; color: #4caf50; margin-top: 1em;">
  <i class="fas fa-check-circle"></i> Copied to clipboard!
</div>

<script>
function copyBibtex() {
  const bibtexText = `@inproceedings{deng2026pulse,
  title={Pulse: Fine-Grained Hierarchical Hashing Index for Disaggregated Memory},
  author={Deng, Guangyang and Yu, Zixiang and Shen, Zhirong and Su, Qiangsheng and Shu, Jiwu},
  booktitle={IEEE International Symposium on High-Performance Computer Architecture (HPCA)},
  year={2026}
}`;

  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(bibtexText).then(function() {
      showSuccess();
    }).catch(function(err) {
      console.error('Clipboard API failed: ', err);
      fallbackCopy(bibtexText);
    });
  } else {
    // Fallback for older browsers
    fallbackCopy(bibtexText);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showSuccess();
      } else {
        alert('Failed to copy. Please manually copy the text.');
      }
    } catch (err) {
      console.error('Fallback copy failed: ', err);
      alert('Failed to copy. Please manually copy the text.');
    }
    
    document.body.removeChild(textarea);
  }

  function showSuccess() {
    const successMsg = document.getElementById('copy-success');
    successMsg.style.display = 'block';
    setTimeout(function() {
      successMsg.style.display = 'none';
    }, 2000);
  }
}
</script>

