---
title: "Bachelor Topic: Quantitative Evaluation of the Floral Shape Variation in ​ Sinningia Speciosa ​ Domestication"
subtitle: Floral Shape Variation Study
layout: default
modal-id: 4
date: 2013-06-21
thumbnail: bachelor_topic/005-02_feature.jpg
project-date: Aug. 2012 - Feb. 2014
keyword: Computer vision, Segmentation, Principal component analysis, Geometric morphometrics, General Procrustes analysis.
---

"Nature is full of mysteries.” This project was proposed to analyze the shape variation of <a href="https://en.wikipedia.org/wiki/Sinningia_speciosa" target="_blank">Darwin’s Gloxinia (_Sinningia Speciosa_)</a> by geometric morphometric analysis. The landmarks on flower, usually represented by a set of characteristic coordinate points (Adams _et al._, 2004; Klingenberg, 2010), were identified through image processing algorithms. These algorithms were implemented with the program written on <a href="https://www.qt.io/qt-features-libraries-apis-tools-and-ide/" target="_blank">Qt Creator</a> and with <a href="https://docs.opencv.org/3.0-beta/doc/tutorials/calib3d/camera_calibration/camera_calibration.html" target="_blank">OpenCV library</a>. By the program, the process of landmark acquisition was simplified to reduce process time and eliminate the error measured by manpower.

<img class="lazy_load" title="GUI" alt="GUI" data-src="{{ site.url }}/img/portfolio/bachelor_topic/gui.jpg">

The flowchart of the program is shown below. An flower was segmented from the background on a 2D image using GrabCut algorithm (Rother _et al._, 2004). The contour line was retrieved from the foreground image using Suzuki85 algorithm (Suzuki _et al._, 1985). At the overlapped part, the unseen contour line (underneath) was assumed to be identical and symmetric to the visible one (above). The primary landmarks were selected manually and then the secondary landmarks were acquired automatically along the contour line.

| <img class="lazy_load" title="Flowchart for front view" alt="Flowchart for front view" data-src="{{ site.url }}/img/portfolio/bachelor_topic/flower_flowchart_front_c.jpg"> | <img class="lazy_load" title="Flowchart for side view" alt="Flowchart for side view" data-src="{{ site.url }}/img/portfolio/bachelor_topic/flower_flowchart_side_c.jpg"> |

Geometric morphometrics analysis (GM) is a collection of coordinate points of landmarks that examine the shapes of flower quantitatively. General Procrustes analysis (GPA) was applied to eliminate variance irrelevant to shape, e.g., variance of
translation, orientation, and scaling, from the landmark dataset. Principal component analysis (PCA) was used to capture the major trends of variation.

<img class="lazy_load" title="General Procrustes analysis" alt="General Procrustes analysis" data-src="{{ site.url }}/img/portfolio/bachelor_topic/gpa_shape_before_after_c.jpg">

| PC1   |   | -2STD   | Mean  | +2STD   |
|:-----:|:-:|:-------:|:-----:|:-------:|
| Face view | <img class="lazy_load" title="PCA PC1 Front" alt="PCA PC1 Front" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_front.jpg"> | <img class="lazy_load" title="PCA PC1 Front -2STD" alt="PCA PC1 Front -2STD" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_front_-2std.jpg"> | <img class="lazy_load" title="PCA PC1 Front Mean" alt="PCA PC1 Front Mean" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_front_mean.jpg"> | <img class="lazy_load" title="PCA PC1 Front +2STD" alt="PCA PC1 Front +2STD" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_front_+2std.jpg"> |
| Side view | <img class="lazy_load" title="PCA PC1 Side" alt="PCA PC1 Side" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_side.jpg"> | <img class="lazy_load" title="PCA PC1 Side -2STD" alt="PCA PC1 Side -2STD" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_side_-2std.jpg"> | <img class="lazy_load" title="PCA PC1 Side Mean" alt="PCA PC1 Side Mean" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_side_mean.jpg"> | <img class="lazy_load" title="PCA PC1 Side +2STD" alt="PCA PC1 Side +2STD" data-src="{{ site.url }}/img/portfolio/bachelor_topic/pc1_side_+2std.jpg"> |

The indicative parameters were observed to represent the floral shape. In the face view, the PC1 is corresponded to the degree of overlap between flower lobes. In the side view, the PC1 is corresponded to the dorsi-ventral asymmetry. For more detail, please access to **<a href="file/學士專題_完稿V2-converted.pdf" target="_blank" onclick="ga('send', 'pageview', 'file/學士專題_完稿V2-converted.pdf');">my bachelor topic pdf</a>**.

**Contributions:**
- Analyzed shape variation of _Sinningia speciosa_ from landmarks identified on 2D images
- **Accelerated process speed** and **eliminated measurement error​** by developing semi-automatic program with GUI using image processing methods for flower landmark acquisition