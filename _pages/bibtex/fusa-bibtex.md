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
@inproceedings{deng2026fusa,
  title={ Breaking Barriers in Atomic Scaling: A Hardware–Software-Collaborated Framework to Deconstruct RDMA Atomic},
  author={Deng, Guangyang and Su, Qiangsheng and Shen, Zhirong and Wang, Qing and Lv, Yina and Wu, Ronglong and Shu, Jiwu},
  booktitle={Proceedings of the 53rd Annual International Symposium on Computer Architecture},
  pages={xxx},
  year={2026}
}
```

<div id="copy-success" style="display: none; color: #4caf50; margin-top: 1em;">
  <i class="fas fa-check-circle"></i> Copied to clipboard!
</div>

<script>
function copyBibtex() {
  const bibtexText = `@inproceedings{deng2026fusa,
  title={ Breaking Barriers in Atomic Scaling: A Hardware–Software-Collaborated Framework to Deconstruct RDMA Atomic},
  author={Deng, Guangyang and Su, Qiangsheng and Shen, Zhirong and Wang, Qing and Lv, Yina and Wu, Ronglong and Shu, Jiwu},
  booktitle={Proceedings of the 53rd Annual International Symposium on Computer Architecture},
  pages={xxx},
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

