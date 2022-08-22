import { broadcastMessage } from '../communications/communicator';

let currentHeight = 0;

function sendLtiIframeResize(height) {
  const message = { subject: 'lti.frameResize', height };
  broadcastMessage(message);
}

const defaultGetSize = () => {
  const ruler = document.getElementById('content-measuring-stick');
  return ruler.offsetTop;
};

export default function initResizeHandler(getSize = defaultGetSize) {

  function resizeIframe() {
    let height = getSize();
    if (height === currentHeight) return;

    currentHeight = height;
    sendLtiIframeResize(currentHeight);
  }

  function findAllImages(child) {
    if (child.tagName === 'IMG') {
      child.addEventListener('load', resizeIframe())
      return;
    }
  
    if (child.children.length === 0) {
      return;
    }
  
    Array.prototype.forEach.call(child.children, (child) => {
      findAllImages(child)
    });
  }

  const handleResize = (mutations) => {
    if (mutations?.length > 0) {
      for (let mutation of mutations) {
        findAllImages(mutation.target)
      }
    }
    resizeIframe()
  };

  const mObserver = new MutationObserver(handleResize);
  window.addEventListener('resize', handleResize);
  mObserver.observe(
    document.documentElement,
    {
      attributes: true, childList: true, subtree: true, characterData: true
    }
  );
}
