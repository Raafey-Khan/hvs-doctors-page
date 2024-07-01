import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="location-section px-4 mx-4">
          <div className="container">
            <div className="location-flex-container flex justify-center items-center gap-7">
            <div className="location-flex-1 basis[50%]">
              Janco Hospital
            </div>
            <div className="location-flex-2 basis-[50%]">
            <img src="images/location-banner.png" alt="" />
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
