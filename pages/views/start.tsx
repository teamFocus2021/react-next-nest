import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import DropzoneUploader from '../../components/dropzone';
import Images from '../../components/images';

interface Props {
  query: { name?: string };
}

const Start: NextPage<Props> = () => {

  return (
    <div>
      <div className="main_div">
        <DropzoneUploader></DropzoneUploader>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
    const query = {
      name: ctx.query.name || null,
    };
    return { props: { query } };
}

export default Start;