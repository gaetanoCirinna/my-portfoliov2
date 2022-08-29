import { Image } from "remix-image";

<Image
  loaderUrl="/api/image"
  src="https://unsplash.com/photos/VnPmmynG0bs"
  width="..."
  height="..."
  alt="..."
  responsive={[
    {
      size: {
        width: 100,
        height: 100,
      },
      maxWidth: 200,
    },
  ]}
/>;
