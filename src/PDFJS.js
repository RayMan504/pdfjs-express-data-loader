import React, {useRef, useEffect} from 'react';
import WebViewer from '@pdftron/pdfjs-express';


const MyComponent = () => {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer({
        path: '/webviewer/lib',
        initialDoc: `/files/Ray's Resume.pdf`,
      },
      viewer.current,
    ).then((instance) => {

    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};