import React from 'react';
import { connect } from 'dva';

function NotFundPage() {
  return (
    <div>
    	<h1>404 Not Fund!</h1>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NotFundPage);
