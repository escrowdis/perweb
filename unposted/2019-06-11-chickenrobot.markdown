---
title: Tracked Robot for Chicken Farm
subtitle: 
layout: default
modal-id: 12
date: 2019-06-11
thumbnail: chickenrobot/robot.jpg
project-date: Mar. - June 2019
keyword: Mechatronics, Motor Control, Trilateration.
---

This project is aimed at building a robot to monitor the chicken farm, located in DongShan, Tainan, to replace the labor surveillance two to three times per day. The robot will scan through the farm to detect the valueless chickens which can't be sold to the market as broiler, for example the disabled or the dead ones. And will notify the farmer ASAP to check up the dead chicken to prevent from jeopardizing others.

It's a competitive, intensive, three-months project to develop a robot from scratch. The robot needs to know where it is and to understand the environmental situation. On the hardware part, there're two sections: the tracked platform and the chassis equipped with all the electronics. Due to urgent time constraints, the tracked platform is bought from a manufacturer. The chassis with 1.6mm thick is designed to have water- and dust-proof using AutoCAD and manufactured by ShiangLin Corporation. The windows for sensors are covered by 3mm acrylic sheets. Inside the chassis, the Nvidia TX2 development board is used as the main processor and the Arduino MEGA is equipped for motor control use. A camera is mounted at the front of the robot to detect the frontal environment. A DWM1000 sensor is mounted on the top of the robot for indoor trilateration. Two 12VDC batteries are coped with to supply the power for the whole robot. 

<img class="lazy_load" title="Tracked Platform" alt="Tracked Platform" data-src="{{ site.url }}/img/portfolio/chickenrobot/platform.jpg">

On the software part, the robot uses ROS (Robot Operating System) to tackle trivial things like communication or data processing in order to enhance the working progress. The motor control section is processing algorithms including PID, estimation of velocity and odometer. 
<!-- TBD -->

<div class="youtube" data-embed="ewb4gjtcguo">
    <div class="play-button"></div> 
</div>

In the future, the videostream of the frontal camera will be used for the environmental survellaince like the health status of chickens and the positions of the obstacles, such as column, poultry drinker or feeder. Additionally, the robot will be automated working 2 times a day to walk through the whole farm.
