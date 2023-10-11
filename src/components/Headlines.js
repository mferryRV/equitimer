const Headlines = ({ headline, subheadline }) => (
  <div>
    <div className="title">{headline}</div>
    {subheadline && <div className="subtitle">{subheadline}</div>}
  </div>
);

export default Headlines;
