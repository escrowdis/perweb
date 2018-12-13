---
title: The 8th​ Utechzone Machine Vision Prize
subtitle: Face Recognition
layout: default
modal-id: 5
date: 2013-08-03
thumbnail: 8th_utechzone/face_recognition.jpg
project-date: Dec. 2013 - Aug. 2014
keyword: Face recognition
---

<a href="http://www.utechzone.com.tw/" target="_blank">Utechzone Co.,LTD</a> is a well-known technical company aimed at machine vision technology and dedicated to the development of automated machine vision systems in Taiwan. The Utechone Machine Vision Prize has been held by the company since 2006 in order to encourage the development of computer vision. Our lab, the <a href="http://ttlin.bime.ntu.edu.tw/ttlin/" target="_blank">Biophotonics and Bioimaging Laboratory</a>, has participated in this contest since 2006, and has won first prize two times. In my first graduate year, I was involved in the 8<sup>th</sup> competition to study and implement new feature, and help tune or adjust the models to achieve better performance.

This competition has four subjects: face, gender, expression and age recognition. The program was developed to detect human faces from the video and extract the features of faces to do the recognition using trained model. We cross-tested algorithms and models to optimize the performance of recognition rate. In face recognition part, histograms of Shearlet Coefficients (HSC) algorithm (Schwartz _et al._, 2011) was implemented as a new feature with recognition rate around 78% with Fisherfaces model.

![Flowchart]({{ site.url }}/img/portfolio/8th_utechzone/flowchart.jpg)

### Histogram Equalization

The hisotgram equalization was applied to increase the global contrast of the image that the intensities can be evenly distributed on the histogram for a better analytical performance.

![]({{ site.url }}/img/portfolio/8th_utechzone/histeq.jpg)

### Face Detecion and Alignment

Haar-like feature (Viola and Michael, 2004) was used to detect the face in the video. After detecting the face, the active shape model (ASM) algorithm (Baldock and Graham, 2000) was applied to align the face into front without frontal rotation on the image to standardize the data.

![]({{ site.url }}/img/portfolio/8th_utechzone/face_detect.jpg)

### Feature Extraction

There're some methods were implemented to extract the features on the face.

- **Local binary patterns (LBP)**: The LBP (Ojala _et al._, 1994) is a type of visual descriptor used for classification, especially a powerful efature feature for texture classification. The algorithm is by comparing the central pixel value with the adjacent M neighbors in a N x N window and then computing the histogram or reordering the data into 1D array. In this competition, the N was 3 so every pixel had to compare with their eight neighbors to generate a feature. The images shown below demonstrated the result processed by LBP method. Additionally, it's efficient enough to run on CPU due to its laconic property.

![]({{ site.url }}/img/portfolio/8th_utechzone/lbp.jpg)

- **Local adaptive ternary pattern (LATP)**: The LATP (Akhloufi and Bendada, 2010) is an extended method of the local ternary pattern (Tan and Triggs, 2007) that calculates the mean value and standard deviation of elements in a NxN window. And the adaptive threshold value is determined based on each result. To enhance the computing performance, the result of the LATP is separated into two binary patterns: upper and lower patterns, a.k.a. LATPU and LATPL respectively.

![]({{ site.url }}/img/portfolio/8th_utechzone/latp.jpg)

- **Gabor filter**: Gabor filter is commonly used in computer science, especially in edge detection. The feature extracted from Gabor filter usually seems a significant one to represent the face feature (8 orientations and 4 scales is often a good start to tune the Gabor parameters).

![]({{ site.url }}/img/portfolio/8th_utechzone/gabor.jpg)

- **Histogram of oriented gradient (HOG)**: The HOG method is applied as one of the facial feature descriptors (Tsai and Huang, 2009). It involves using the gradient magnitude and the gradient orientation of an image for feature extraction. The aligned face image was splited into 2 x 2 blocks and computed the histograms in various gradient directions within each block. The histograms were combined to represent one descriptor. In this competition, we splited the gradient directions into 12 units; therefore, 4 x 12 eigenvectors could be obtained for each facial image.

![]({{ site.url }}/img/portfolio/8th_utechzone/hog.jpg)

<!-- - **Local Gabor Binary Patterns (LGBP)**:  -->

- **Histograms of Shearlet Coefficients (HSC)**: The HSC method (Schwartz _et al._, 2011) was proposed to extract features to overcome the limitation of representing directional features, such as wavelet and Gabor. "Shearlet transforms provide a general framework for analyzing and representing data with anisotropic information at multiple scales. As a consequence, signal singularities, such as edges, can be precisely detected and located in images. Based on the idea of employing histograms to estimate the distribution of edge orientations and on the accurate multi-scale analysis provided by shearlet transforms." In the image, the higher frequency part was splited into eight shearlets and then discretized in to 8-bit features. The lower frequency part would be considered as a full image and then repeated the same step to discretized the information from its higher frequency part.

![]({{ site.url }}/img/portfolio/8th_utechzone/hsc.jpg)

- **2DPCA**: The 2DPCA (Yang _et al._, 2004) was applied for dimension reduction and face recognition by using eigenface images.

### Recognition

According to different subjects in the competition, features were selected based on their performance on different aspects and also the decision making model. The Support Vector Machine (SVM) and AdaBoost were utilized to train the models for different recognition tasks.

- **SVM**: SVM is a method that can be used to classify various classes of data from training models. In our program, we used a library for support vector machine (LIBSVM) developed by Dr. Chih-Chung Chang and Dr. Chih-Jen Lin.

- **AdaBoost**: AdaBoost aimes to construct a strong classifier from the weighted combination of numerous weak classifiers when the weights are adjusted in each run. In our program, we used SVM models as weak classifiers. This type of algorithm is referred to as the AdaBoost-SVM algorithm (Li _et al._, 2008). All the tasks except the gender recognition were using the multi-class AdaBoost (Zhu _et al._, 2005) algorithm. The AdaBoost method was used for the gender recognition due to it could be used as a binary classifier.

For each subject, various algorithms and methods were combined listed below. In the face recognition part, the accuracy rate was improve from 87.1% to 91.67%.

![]({{ site.url }}/img/portfolio/8th_utechzone/combination.jpg)

I learned mathematical theories from this experience. It's my first time involved in a project with more than 5 contributers. The journey was full of exciting that I could not only learn how to survey the papers but also cowork with different people on the same project. I also felt a great sense of achievement while implementing the HSC method.