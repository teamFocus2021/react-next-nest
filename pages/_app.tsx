import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Navbar from '../components/navbar';
import 'react-dropzone-uploader/dist/styles.css'
import '../components/dropzone.css'
import '../components/about.css'
import '../components/button.css'
import '../components/editor.css'


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="total_div">
      <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
    </div>
  );
};

export default MyApp;
