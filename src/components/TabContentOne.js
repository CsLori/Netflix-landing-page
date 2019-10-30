import React from 'react';

export default function TabContentOne() {
  return (
    <section className="tab-content">
      <div className="container">
        <div id="tab-1-content" className="tab-content-item show">
          <div className="tab-1-content-inner">
            <div>
              <p className="text-lg">
                If you decide Netflix isn't for you - no problem. No commitment.
                Cancel online anytime.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <img src="/img/tab-1-pic.png" alt="tab" />
          </div>
        </div>
      </div>
    </section>
  );
}
