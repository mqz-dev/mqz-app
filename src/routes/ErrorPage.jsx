import Seo from "../components/Seo";

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="404 - Page Not Found | MQZ"
        description="The page you're looking for doesn't exist."
      />
      <main className="pg-0910">
        <div className="pg-ruler-0910"></div>
        <h1>ErrorPage</h1>
      </main>
    </>
  );
}
