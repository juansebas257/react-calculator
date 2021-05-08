import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value }) => (
    <div className='result'>
        {value}
    </div>
)

// props validation
Result.propTypes = {
    value: PropTypes.string.isRequired
}

// default prop values
Result.defaultProps = {
    value: "0"
}
export default Result;