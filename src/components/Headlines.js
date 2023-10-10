const Headlines = ({ headline, subheadline }) => (
  <div>
    <div class="title">{headline}</div>
    {subheadline && <div class="subtitle">{subheadline}</div>}
  </div>
);

export default Headlines;
