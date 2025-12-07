---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

## [Pulse: Fine-Grained Hierarchical Hashing Index for Disaggregated Memory]()

**Guangyang Deng**, Zixiang Yu, Zhirong Shen, Qiangsheng Su, Jiwu Shu

Published in IEEE International Symposium on High-Performance Computer Architecture (**HPCA'26**), 2026

[<i class="fas fa-file-pdf"></i> Paper](https://github.com/syslucas/pulse)
[<i class="fab fa-github"></i> Code](https://github.com/syslucas/pulse)
[<i class="fas fa-file-alt"></i> BibTeX](/bibtex/pulse-bibtex/)

By decoupling compute and memory resources into independent pools that are provisioned and managed separately, disaggregated memory (DM) is promising to break the scaling constraints for memory systems and improve resource utilization. However, it also comes with a new challenge to design a high-performance hashing index to manage the vast memory pool with weak computing power. In this paper, we reconsider this problem and find that existing hashing indexes for DM still experience two fundamental yet unresolved limitations: (i) amplifying traffic under high insertion concurrency, and (ii) introducing significantly high insertion latency, stemming mainly from the directory synchronization and item relocation in resizing process.

We resolve above limitations by designing Pulse, a fine-grained hierarchical hashing index for DM. Pulse comprises the following three design primitives. It proposes a multi-level index structure, which breaks the conventional flat directory into multiple sub-directories that are organized hierarchically, achieving fine-grained directory synchronization. Pulse also maintains a small portion of hashed keys in the memory pool, which aids in item relocation during resizing, thereby reducing resizing traffic and promising system stability. Pulse finally exploits operation parallelism by tailoring the doorbell batching mechanism with selective signaling. We conduct extensive experiments using a variety of benchmarks, showing that Pulse can improve 3.46× of the throughput and reduce 76.3% of the tail latency compared to state-of-the-art hashing indexes.


## [MetoHash: A Memory-Efficient and Traffic-Optimized Hashing Index on Hybrid PMem-DRAM Memories](https://dl.acm.org/doi/10.1145/3712285.3759776)

Zixiang Yu#, **Guangyang Deng**#, Zhirong Shen, Qiangsheng Su, Ronglong Wu, Xiaoli Wang, Quanqing Xu, Chuanhui Yang, Zhifeng Bao

Published in Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (**SC'25**), 2025

[<i class="fas fa-file-pdf"></i> Paper](https://dl.acm.org/doi/10.1145/3712285.3759776)
[<i class="fab fa-github"></i> Code](https://github.com/yzx2337/Meto)
[<i class="fas fa-file-alt"></i> BibTeX](/bibtex/meto-bibtex/)

Persistent memory (PMem) brings new design considerations in realizing high-performance and scalable hashing indexes. We uncover that existing hashing indexes for PMem still suffer from traffic amplification and memory inefficiency. We present MetoHash, a memory-efficient and traffic-optimized hashing index on hybrid PMem-DRAM memories. MetoHash proposes a three-layer index structure spanning across CPU caches, DRAM, and PMem for data management. It aggregates the incoming key-value items in CPU caches for fast inserts, which are then arranged in DRAM and flushed to PMem, to eliminate traffic amplification. MetoHash also uses fingerprinting to reduce unnecessary probings over PMem and removes duplicate items during bucket relocations. We implement MetoHash on PMem with persistent and volatile CPU caches, and show that compared to state-of-the-art hashing indexes for PMem, MetoHash improves the throughput by 86.1–257.6% under various workloads.
