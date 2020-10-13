import styles from "content.module.scss";
const Content = () => {
  return (
    <div class="md:flex bg-white rounded-lg p-6">
      <div class="text-center md:text-left">
        <h2 class="text-lg">Erin Lindford</h2>
        <div class="text-purple-500">Product Engineer</div>
        <div class="text-gray-600">erinlindford@example.com</div>
        <div class="text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  );
};

export default Content;
