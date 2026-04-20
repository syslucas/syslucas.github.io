---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<!-- {% include base_path %} -->

Education
======
* M.S., Computer Science, [Xiamen University](https://www.xmu.edu.cn/), Xiamen, China, 09/2024-06/2027(projected), advisor: [Prof. Zhirong Shen](https://shenzr.github.io/)
* B.Eng., Computer Science, [Tianjin University of Technology](https://www.tjut.edu.cn/), Tianjin, China, 09/2020-06/2024

Publications
======

## [Breaking Barriers in Atomic Scaling: A Hardware–Software-Collaborated Framework to Deconstruct RDMA Atomic]()
**Guangyang Deng**, Qiangsheng Su, Zhirong Shen, Qing Wang, Yina Lv, Ronglong Wu, Jiwu Shu

Published in Proceedings of the 53rd Annual International Symposium on Computer Architecture (**ISCA'26**), 2026

## [Pulse: Fine-Grained Hierarchical Hashing Index for Disaggregated Memory]()

**Guangyang Deng**, Zixiang Yu, Zhirong Shen, Qiangsheng Su, Jiwu Shu

Published in IEEE International Symposium on High-Performance Computer Architecture (**HPCA'26**), 2026

## [MetoHash: A Memory-Efficient and Traffic-Optimized Hashing Index on Hybrid PMem-DRAM Memories](https://dl.acm.org/doi/10.1145/3712285.3759776)

Zixiang Yu#, **Guangyang Deng**#, Zhirong Shen, Qiangsheng Su, Ronglong Wu, Xiaoli Wang, Quanqing Xu, Chuanhui Yang, Zhifeng Bao

Published in Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (**SC'25**), 2025

**MetoHash nominated for SC'25 Best Student Paper Award!**

Project
======
## [Pulsar](https://github.com/apache/pulsar): Optimizing Negative Acknowledgement Memory Usage
Contributed a memory-efficient redesign of the NegativeAcksTracker in Apache Pulsar C++ & Go Client, addressing
excessive memory usage and redelivery inaccuracies under high-throughput workloads (PR: [C++ Client](https://github.com/apache/pulsar-client-cpp/pull/497) & [Go Client](https://github.com/apache/pulsar-client-go/pull/1410)).
Replaced HashMap with a timestamp-bucketed structure, leveraging RoaringBitmap to compactly store entry IDs and reduce per-message
memory overhead.

# Scholarship & Honorary Titles
* **National Scholarships**, Ministry of Education, China, in 2022
* **Excellent Student of Tianjin**, Tianjin Municipal Education Commission, China, in 2022
* **Tianjin Municipal Government Scholarship**, Tianjin Municipal People's Government, China, in 2021

# Competition
* 2023-International Collegiate Programming Contest Asia Xi'an Regional Contest(**Silver** Medel)
* 2022-China Collegiate Programming Contest, Weihai Site(**Bronze** Medal) 
* 2023-Chinese Collegiate Computer Design Competition(**Second** prize)


Skills
======
* Scripting languages: python, perl, bash
* Source control management: git
* Real app experience: Nginx, Mysql, Redis
* English
  * CET 6: 507
  * CET 4: 509

<!-- 
Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
