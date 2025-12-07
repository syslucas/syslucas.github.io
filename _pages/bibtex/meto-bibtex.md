---
layout: single
title: "MetoHash BibTeX"
permalink: /bibtex/meto-bibtex/
author_profile: false
---

## BibTeX Entry

<button onclick="copyBibtex()" class="btn btn--primary" style="margin-bottom: 1em;">
  <i class="fas fa-clipboard"></i> Copy BibTeX
</button>

```bibtex
@inproceedings{yu2025metohash,
  title={MetoHash: A Memory-Efficient and Traffic-Optimized Hashing Index on Hybrid PMem-DRAM Memories},
  author={Yu, Zixiang and Deng, Guangyang and Shen, Zhirong and Su, Qiangsheng and Wu, Ronglong and Wang, Xiaoli and Xu, Quanqing and Yang, Chuanhui and Bao, Zhifeng},
  booktitle={Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis},
  pages={805--819},
  year={2025}
}
```

<div id="copy-success" style="display: none; color: #4caf50; margin-top: 1em;">
  <i class="fas fa-check-circle"></i> Copied to clipboard!
</div>

<script>
function copyBibtex() {
  const bibtexText = `@inproceedings{yu2025metohash,
  title={MetoHash: A Memory-Efficient and Traffic-Optimized Hashing Index on Hybrid PMem-DRAM Memories},
  author={Yu, Zixiang and Deng, Guangyang and Shen, Zhirong and Su, Qiangsheng and Wu, Ronglong and Wang, Xiaoli and Xu, Quanqing and Yang, Chuanhui and Bao, Zhifeng},
  booktitle={Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis},
  pages={805--819},
  year={2025}
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

