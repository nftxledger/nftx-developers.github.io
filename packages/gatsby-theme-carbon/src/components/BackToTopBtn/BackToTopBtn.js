import React from 'react';
import { UpToTop } from '@carbon/react/icons';
import { button } from './BackToTopBtn.module.scss';

const BackToTopBtn = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    className={button}
    type="button"
    aria-label="Back to Top">
    <UpToTop size={20} />
  </button>
);

export default BackToTopBtn;
