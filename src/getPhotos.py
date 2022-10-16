# get list of all photos from ./photos directory
# print list of photos to console

import os
from PIL import Image
photos = []
for file in os.listdir("./photos"):
  foo = Image.open(f'./photos/{file}')  # My image is a 200x374 jpeg that is 102kb large  
  # get size of image
  width, height = foo.size
  # print(f'width: {width}, height: {height}')
  # downsize the image with an ANTIALIAS filter (gives the highest quality)
  foo = foo.resize((300,int(height * 300/width)),Image.ANTIALIAS)  
  foo.save(f'./compressedLess/{file}', optimize=True, quality=95)
  print(f'./compressed/{file}')
  
    


# from PIL import Image

#  foo = Image.open('path/to/image.jpg')  # My image is a 200x374 jpeg that is 102kb large
#  foo.size  # (200, 374)
 
#  # downsize the image with an ANTIALIAS filter (gives the highest quality)
#  foo = foo.resize((160,300),Image.ANTIALIAS)
 
#  foo.save('path/to/save/image_scaled.jpg', quality=95)  # The saved downsized image size is 24.8kb
 
#  foo.save('path/to/save/image_scaled_opt.jpg', optimize=True, quality=95)