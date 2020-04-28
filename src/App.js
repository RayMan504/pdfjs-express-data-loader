import React, {
  useRef,
  useEffect
} from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import { xfdfString } from './xfdfDataString';


import './App.css';

function App() {
  // const viewer = useRef(null);
  // const saveBlobToServer = (blob) => console.log(blob)
  
  // let xfdfData = '';
  // let documentBlob;
  // useEffect(() => {
  //   WebViewer({
  //     path: '/webviewer/lib',
  //     // initialDoc: '/files/VS 6-22.pdf',
  //   },
  //   viewer.current,
  //   document.getElementsByClassName('webviewer')
  //   ).then((instance) => {
  //     const {
  //       docViewer,
  //     } = instance;
  //     const annotManager = docViewer.getAnnotationManager;
  //     const input = document.getElementById('file_upload');
  //       input.addEventListener('change', function () {
  //         // Get the file from the input
  //         var file = input.files[0];
  //         instance.loadDocument(file, {
  //           filename: file.name
  //         });
  //       });
  //     docViewer.on('documentLoaded', async () => {
  //       // const rectangleAnnot = new Annotations.RectangleAnnotation();
  //       // rectangleAnnot.PageNumber = 1;
  //       // // values are in page coordinates with (0, 0) in the top left
  //       // rectangleAnnot.X = 100;
  //       // rectangleAnnot.Y = 150;
  //       // rectangleAnnot.Width = 200;
  //       // rectangleAnnot.Height = 50;
  //       // rectangleAnnot.Author = annotManager.getCurrentUser();
  //       // annotManager.addAnnotation(rectangleAnnot);
  //       // need to draw the annotation otherwise it won't show up until the page is refreshed
  //       // annotManager.redrawAnnotation(rectangleAnnot);
  //       const documentStream = await docViewer.getDocument().getFileData({});
  //       documentBlob = new Blob([documentStream], {
  //         type: 'application/pdf'
  //       });
  //       // saveBlobToServer(documentBlob);
  //       // annotManager.on('fieldChanged', (field, value) => {
  //       //   console.log('Field changed: ' + field.name + ', ' + value);
  //       // });
  //       // docViewer.getAnnotationsLoadedPromise().then(() => {
  //       //   // iterate over fields
  //       //   var fieldManager = annotManager.getFieldManager();
  //       //   fieldManager.forEachField(field => {
  //       //     console.log(field.getValue());
  //       //   });
  //       // });
  //     });
  //     let saveBlob = document.getElementById('save_blob');
  //     let loadBlob = document.getElementById('load_blob');
  //     saveBlob.addEventListener('click', async () => {
  //       xfdfData = await annotManager.exportAnnotations();
  //       saveBlobToServer(documentBlob);
  //       console.log(xfdfData);
  //     });
  //     loadBlob.addEventListener('click', async () => {
  //       // annotManager.importAnnotations(xfdfData);
  //       await annotManager.importAnnotations(xfdfData);
  //       const getCommand = await annotManager.exportAnnotCommand();
  //       console.log(getCommand);
  //       instance.loadDocument(documentBlob, {
  //         filename: 'myfile.pdf'
  //       });
  //       // instance.drawAnnotations(xfdfData)
  //     });
      
  //   });
  //   // var input = document.getElementById('file_upload');
  //   // WebViewer()
  //   //   .then(function (instance) {
  //   //   });

    
  // }, []);
  const viewer = useRef(null);
  const saveBlobToServer = (blob) => {
    console.log(blob);
  };
  useEffect(() => {
    const input = document.getElementById('file_upload');
    const saveBlob = document.getElementById('save_blob');
    const loadBlob = document.getElementById('load_blob');
    let documentBlob;
    let xfdfData;
    WebViewer({
        path: '/webviewer/lib',
        initialDoc: '/files/VS 6-22.pdf',
      },
      viewer.current
    ).then((instance) => {
      const {
        docViewer
      } = instance;
      const annotManager = docViewer.getAnnotationManager();
      input.addEventListener('change', function () {
        var file = input.files[0];
        instance.loadDocument(file, {
          filename: file.name
        });
      });
      docViewer.on('annotationsLoaded', async () => {
        const documentStream = await docViewer.getDocument().getFileData({});
        documentBlob = new Blob([documentStream], {
          type: 'application/pdf',
        });
        // console.log(typeof xfdfString, 'xfdf')
        await annotManager.importAnnotations(xfdfString);
      });
      saveBlob.addEventListener('click', async () => {
        xfdfData = await annotManager.exportAnnotations();
        // saveBlobToServer(documentBlob);
        console.log(xfdfData);
      });
      loadBlob.addEventListener('click', async () => {
        // annotManager.importAnnotations(xfdfData);
        await annotManager.importAnnotations(xfdfString);
        // const getCommand = await annotManager.exportAnnotCommand();
        // console.log(getCommand);
        // instance.loadDocument(documentBlob, {
        //   filename: 'myfile.pdf'
        // });
        // instance.drawAnnotations(xfdfData)
      });
    });
  }, []);

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
