import Image from 'next/image'
import { Inter } from 'next/font/google'
import CanvasPage from '@/components/CanvasPage'
import { useEffect, useRef, useState } from 'react';
import PptxGenJS from 'pptxgenjs';
import { WhiteBackground } from '../../../public/white.jpg';
import { Button } from 'antd';

export default function EditorPage() {
  const [canvasPages, setCanvasPages] = useState([1]);
  const EditorRefs = useRef([]);
  const slidePreviewList = useRef([]);
  const [activePage, setActivePage] = useState(1);

  const addPage = () => {
    const newPageId = Math.floor(Math.random() * 100000) + 1;
    setCanvasPages([...canvasPages, newPageId]);
  };

  const deletePage = (pageId) => {
    const updatedPages = canvasPages.filter((pId) => (pId != pageId));
    EditorRefs.current = EditorRefs.current.filter((ref) => (ref != null));
    setCanvasPages(updatedPages);
  };

  const downloadAllPages = () => {
    const pptx = new PptxGenJS();

    EditorRefs.current.forEach((page, index) => {
      if(!page) return;
      const canvas = page.getElementsByTagName(`canvas`)[0];
      // add slide
      const slide = pptx.addSlide();
      const dataURL = canvas.toDataURL();
      slide.addImage({ data: dataURL, x: 0, y: 0, w: "100%", h: "100%" });
      });
      pptx.writeFile({ fileName: "Sample Presentation.pptx" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Iterate over canvas pages and update the preview images
      canvasPages.forEach((page, index) => {
        const canvas = EditorRefs.current[index].getElementsByTagName("canvas")[0];
        const dataURL = canvas.toDataURL();
        const imageElement = slidePreviewList.current[index].getElementsByTagName(`img`)[0];
        console.log("imageElement", imageElement)
        if (imageElement) {
          imageElement.src = dataURL;
        }
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [canvasPages]);

  return (
    <div className='flex w-full h-[100vh]'>
      <div className='bg-[#F9FBFD] h-full w-[300px] overflow-y-scroll overflow-x-hidden'>
        {canvasPages.map((pageId, index) => (
            <div 
              key={index}
              ref={(element) => {
                slidePreviewList.current[index] = element
              }} 
              className='flex justify-center items-start m-7 w-[180px]' 
            >
              <span className='mr-3 bold text-lg'>{index+1}</span>
              <Image
                id={`preview-image-${index}`}
                className='p-[2px] rounded-lg border-[3px] border-[gray] cursor-pointer'
                src={<WhiteBackground />}
                width={300}
                height={300}
                alt={`preview-image-${index}`}
                onClick={() => setActivePage(pageId)}
              />
          </div>
        ))}
      </div>
      <div className='bg-[#F1F2F6] h-full w-full relative'>
        <div className='bg-white h-[70px] flex editor flex-row-reverse items-center mr-5 '>
          <Button onClick={addPage} className='bg'>Add Page</Button>
          <Button onClick={downloadAllPages} className=''>Download All Pages</Button>
        </div>
        <div className='canvas'>
          {canvasPages.map((pageId, index) => (
            <div 
              key={index}
              ref={(el) => (EditorRefs.current[index] = el)}
              className={`canvas-page ${activePage === pageId ? 'active' : 'hidden'}`}
              data-page-id={pageId}
            >
              <CanvasPage />
              <Button type='danger' onClick={() => deletePage(pageId)} className='bg-red-600 text-white'>Delete Last Page</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
