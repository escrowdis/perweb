---
title: "Master Thesis: Sensor Fusion of Stereo Vision and Radar Systems for Vehicle Safety Application"
subtitle: The Development of Automatic Emergency Braking System
layout: default
modal-id: 10
date: 2015-09-09
thumbnail: master_thesis/fusion.jpg
project-date: Apr 2013 - Sep. 2015
keyword: Sensor fusion, Object detection, Object tracking, Object Recognition, Path planning, Decision-making, GUI design.
---

“All the sensors are not accurate, but some of them are useful.” Each sensor has their own limitations. Multisensor was proposed to observe more information. In this research, an Automatic Emergency Braking (AEB) system was developed to warn the driver of potential danger with a clear and concise GUI. The algorithms of obstacle detection, tracking, recognition, and path planning were developed to make the system sense and react to the local environment.

At first, a stereo vision kit was self-made which's easy to adjust the focal length of camera and baseline for experimental use.

![Stereo vision kit]({{ site.url }}/img/portfolio/master_thesis/stereo_vision_rig_c.jpg "Stereo Vision Kit")

After an off-line camera calibration revised from <a href="https://docs.opencv.org/3.0-beta/doc/tutorials/calib3d/camera_calibration/camera_calibration.html" target="_blank">OpenCV library</a> (Lai, 2012), the Semi-Global Block Matching (SGBM) algorithm (Hirschmüller, 2008) was applied for correspondence matching on GPU to accelerate the process performance. The 3D information estimated by stereo matching was projected on an bird's-eye-view. The objects were then detected using the blob method on the top-view and then reprojected back to label them on the image. 

![Fusion]({{ site.url }}/img/portfolio/master_thesis/fusion-1.jpg "GUI")

The ground surface was removed using the v-disparity method (Labayrade _et al._, 2005) that is a histogram of the various value of disparity on each row. The ground was filtered out which appeared as a slash on the v-disparity map.

![V-disparity]({{ site.url }}/img/portfolio/master_thesis/v-disparity_c.jpg "V-Disparity")
![Ground surface removal]({{ site.url }}/img/portfolio/master_thesis/surface_removal_c.jpg "Ground Surface Removal")

After object detection, the Bhattacharyya distance was used to distinguish different objects from the hue color-space. Extended Kalman filter (Kalman, 1960) was then applied to track their trajectory. Pre-collision warning method was approached by path planning algorithms and the GUI to guide the driver. The path planning algorithms were implemented and analyzed to propose a more real one, such as A* and Vector Field Histogram algorithms.

In order to eliminate measurement error resulting from the stereo vision, the object-level sensor fusion method (Wu _et al._, 2009) was proposed to ameliorate the accuracy of obstacle motion state estimation by mounting a millimeter-wave radar, <a href="https://autonomoustuff.com/product/delphi-esr-9-21-21/" target="_blank">Delphi ESR v9.21.21</a>. Although the radar is lack of color information, it can provide more accurate depth informaition rather than the one estimated by stereo vision. A CANBus control box was fabricated to deploy the radar into the system.

| ![Delphi ESR]({{ site.url }}/img/portfolio/master_thesis/esr_c.jpg "Delphi ESR v9.21.21") | ![Control box]({{ site.url }}/img/portfolio/master_thesis/control_box.jpg "CANBus Control Box") | ![Control box 1]({{ site.url }}/img/portfolio/master_thesis/control_box-1.jpg "CANBus Control Box 1") |

The system was ameliorated to approach a better performance (see videos below). For more detail, please access to **<a href="file/MasterThesis-final.pdf" target="_blank" onclick="ga('send', 'pageview', 'file/MasterThesis-final.pdf');">my master thesis pdf</a>**.

![Cart]({{ site.url }}/img/portfolio/master_thesis/cart.jpg "Cart")

**Contributions:**
- Constructed **object-level sensor-fusion-based** vehicle safety system capable of obstacle detection, tracking and collision avoidance algorithms by a stereo vision and a millimeter-wave radar.
- Refactored algorithms and analyzed the performances to eliminate false detect of objects around
- Eliminated measurement error of depth information from 2.4% to **0.7%** using fused information
- Enhanced obstacle matched rate from 82.1% to **89.8%** using fused information
- Accelerated **2.8** times in correspondence matching method using CUDA with OpenCV
- Analyzed the performances of path planning algorithms between A* and VFH to figure smoother and better solution for vehicle
- Refactored obstacle matching algorithm to optimize performance by speed-up around **30%**
- Eliminated measurement error by optimizing camera calibration on stereo vision
- Analyzed path **planning​​ algorithms** to provide more realistic solution
- Designed clear and concise GUI for user easy to understand environmental information

<div class="youtube" data-embed="J4dLS4-Mt_Y">
    <div class="play-button"></div> 
</div>

<div class="youtube" data-embed="Kg3AjFOHUyA">
    <div class="play-button"></div> 
</div>

<div class="youtube" data-embed="r_ZSEXA5Sok">
    <div class="play-button"></div> 
</div>

<div class="youtube" data-embed="EpQ572MjafM">
    <div class="play-button"></div> 
</div>

<div class="youtube" data-embed="L4HTqM5YG6w">
    <div class="play-button"></div> 
</div>

<div class="youtube" data-embed="IKS9RFLg2hU">
    <div class="play-button"></div> 
</div>
