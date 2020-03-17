import { broadcastMessage } from 'atomic-fuel/libs/communications/communicator';

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
  const handleResize = () => {
    const height = getSize();

    if (height === currentHeight) return;

    currentHeight = height;
    sendLtiIframeResize(currentHeight);
  };

  const mObserver = new MutationObserver(handleResize);
  mObserver.observe(
    document.documentElement,
    {
      attributes: true, childList: true, subtree: true, characterData: true
    }
  );
}
