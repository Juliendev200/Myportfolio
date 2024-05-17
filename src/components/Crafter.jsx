export default function Crafter({ craftername, crafterpicture }) {
  return (
    <div className="hosting">
      <h3>{craftername}</h3>
      <img src={crafterpicture} alt="hostpicture" className="hosting_picture" />
    </div>
  );
}
