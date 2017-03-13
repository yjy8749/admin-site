import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  console.log(props);
  return (
    <div className={styles.normal}>
        <h1 className={styles.title}>
          {props.authenticated?'Successed':'Failed'}
        </h1>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ app },props)=>{
  return { ...app };
})(IndexPage);
