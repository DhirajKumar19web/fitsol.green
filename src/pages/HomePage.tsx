import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar />

      <main className="grow py-8">
        <Container>
          <h1 className="text-5xl font-extrabold text-slate-900">
            This is Raleway
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            This paragraph uses the default system sans-serif.
          </p>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;