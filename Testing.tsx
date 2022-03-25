/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

import { InferenceSession } from "onnxruntime-react-native";
import * as RNFS from 'react-native-fs';
import MNIST, {MNISTInput, MNISTOutput, MNISTResult, } from './mnist-data-handler';

// async function runModel(preprocessedData: any) {

async function runModel() {
    // Create session and set options. See the docs here for more options: 
    //https://onnxruntime.ai/docs/api/js/interfaces/InferenceSession.SessionOptions.html#graphOptimizationLevel
    console.log('Inference session started');
    // const modelPath = './mnist.ort'
    let res_file = null
    await RNFS.readFileAssets('read.txt').then((res) => {
        res_file = res
      })
      console.log('read file res: ', res_file);


    const modelPath2 = 'file:///android_asset/mnist.ort'

    let load_model = null

    // await InferenceSession.create(load_model);
    console.log('Inference session created');


    // Run inference and get results.
    // var [results, inferenceTime] =  await runInference(session, preprocessedData);
    // return [results, inferenceTime];
  }
const T1 = () => {
    runModel()
    return (
        <Text>Happy Sugar Life</Text>

    )
}


export default T1;