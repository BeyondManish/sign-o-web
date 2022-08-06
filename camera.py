import cv2

class VideoCamera(object):
  def __init__(self):
    self.video = cv2.VideoCapture(0)
  
  # where server closes, close the cam
  def __del__(self):
    self.video.release()
  
  def get_frame(self):
    # video get stored in frame
    # ret is flag if frame is read (true or false)
    ret, frame = self.video.read()
    # convert frame to jpeg format
    ret, jpeg = cv2.imencode('.jpg', frame)
    return jpeg.tobytes() # convert to bytes and sending to browser


