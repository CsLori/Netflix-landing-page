import React from 'react';

export default function Tabs() {
  return (
    <section className="tabs">
      <div className="container">
        <div id="tab-1" className="tab-item tab-border">
          <i className="fa fa-close fa-3x"></i>
          <p className="hide-sm">Cancel anytime</p>
        </div>
        <div id="tab-2" className="tab-item tab-border">
          <i className="fa fa-tablet fa-3x"></i>
          <p className="hide-sm">Watch anywhere</p>
        </div>
        <div id="tab-3" className="tab-item tab-border">
          <i className="fa fa-tags fa-3x"></i>
          <p className="hide-sm">Pick your price</p>
        </div>
      </div>
    </section>
  );
}
