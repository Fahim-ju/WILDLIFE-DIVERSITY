# MONITORING WILDLIFE DIVERSITY THROUGH CAMERA TRAPS

This repository contains the implementation of an animal detection system using transfer learning on YOLO (You Only Look Once) which trained on the COCO (Common Objects in Context) dataset. The goal of this project is to develop an accurate wildlife monitoring system by leveraging the knowledge learned from a pre-trained YOLO model on a large-scale dataset.

## Dataset

Our dataset consists of a diverse collection of images showcasing various animals. The YOLO model used in this project has been pretrained on this dataset, enabling it to detect and classify different animal categories. The animals included in our dataset are:
  * Bird
  * Cat
  * Dog
  * Horse
  * Sheep
  * Cow
  * Elephant
  * Bear
  * Zebra
  * Giraffe

## Transfer Learning with YOLO

Transfer learning is a technique that enables leveraging the knowledge learned from a pre-trained model and applying it to a new task or dataset. In this project, we utilize transfer learning with a pre-trained YOLO model on the COCO dataset. By utilizing the pre-trained weights, we can accelerate the training process and enhance the performance of the animal detection model.

# Dependencies

* [TensorFlow.js](https://www.tensorflow.org/js)
* [Keras](https://keras.io/)
* [npm](https://www.npmjs.com/)
* [React.js](https://reactjs.org/)

# Installation

### Prerequisites

Install Node.js and npm using the link above. Follow instructions on their respective websites. Npm is included with Node.js

### Instructions

Clone the repository
```bash
git clone https://github.com/Fahim-ju/WILDLIFE-DIVERSITY.git
```

Install all the dependencies
```bash
cd WildEye
npm install
```

# Usage

Run the project
```bash
cd WildEye
npm start
```

Open a web browser and go to
```bash
http://localhost:3000
```