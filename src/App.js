import React, {
  useRef,
  useEffect
} from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import {xfdfString} from './xfdfDataString'
import './App.css';
import {xml2json} from './helpers/xmlJson';
import {json2xml} from './helpers/jsonXml';
import {
  jsonMapper
} from './helpers/jsonMapper';


import cft from './mockData.json';


function App() {
  const viewer = useRef(null);
  const saveBlobToServer = (blob) => {
    console.log(blob);
  };

  const showXml = (xml) => {
    //parse xml
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc
    // return xmlDoc.selectNodes('/xfdf/fields/field');
    
  }
  useEffect(() => {
    WebViewer(
      { path: "/webviewer/lib", initialDoc: "/files/VS 6-22.pdf" },
      viewer.current
    ).then((instance) => {
      const { docViewer, annotManager, Annotations } = instance;
      const xmlDom = showXml(xfdfString);
      const xmlJson = xml2json(xmlDom, "");
      const mappedMockData = jsonMapper(xmlJson, cft);
      // console.log(xml2json(showXml(xfdfString), ""));
      docViewer.on("annotationsLoaded", async () => {
        console.log(json2xml(mappedMockData, ""),'hit')
        const updatedXml = json2xml(mappedMockData, "");
        await annotManager.importAnnotations(updatedXml, "");
        // await annotManager.importAnnotations(xfdfString);

      });
    });
  }, []);
  // useEffect(() => {
  //   WebViewer(
  //     { path: "/webviewer/lib", initialDoc: "/files/VS 6-22.pdf" },
  //     viewer.current
  //   ).then((instance) => {
  //     const { docViewer, annotManager, Annotations } = instance;
  //     docViewer.on("annotationsLoaded", async () => {
  //       annotManager.importAnnotations(mergedData);
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   const input = document.getElementById('file_upload');
  //   const saveBlob = document.getElementById('save_blob');
  //   const loadBlob = document.getElementById('load_blob');
  //   let documentBlob;
  //   let xfdfData;
  //   WebViewer({
  //       path: '/webviewer/lib',
  //       initialDoc: '/files/sample_pdf.pdf',
  //     },
  //     viewer.current
  //   ).then((instance) => {
  //     const {
  //       docViewer
  //     } = instance;
  //     const annotManager = docViewer.getAnnotationManager();
  //     input.addEventListener('change', function () {
  //       var file = input.files[0];
  //       instance.loadDocument(file, {
  //         filename: file.name
  //       });
  //     });
  //     docViewer.on('annotationsLoaded', async () => {
  //       const documentStream = await docViewer.getDocument().getFileData({});
  //       documentBlob = new Blob([documentStream], {
  //         type: 'application/pdf',
  //       });
  //       docViewer.on("annotationsLoaded", async () => {
  //         annotManager.importAnnotations(mergedData);
  //       });
  //       // console.log(typeof xfdfString, 'xfdf')
  //       // const xmlSample = showXml(xfdfString)
  //       // console.log(xml2json(xmlSample, ""));
        
  //       await annotManager.importAnnotations();
  //     });
      
  //   });
  // }, []);

  return (
    <div className = "App">
      <label for="file_upload">Choose A file</label>
      <input type="file" id="file_upload" name="file_upload" accept=".pdf"/>
      <button id="save_blob">Save Blob</button>
      <button id="load_blob">Load Blob</button>
      {/* <div className="App"> */}
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer}></div>
      </div>
    // </div>
    // </div>
      
  );
}

export default App;
