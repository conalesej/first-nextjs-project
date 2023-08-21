import Link from "next/link";
import React from "react";
import { Card } from "./components";

const App = () => {
  return (
    <>
      <main>
        <h2>Dashboard</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          repellendus tempore, exercitationem odit, quasi doloremque possimus
          recusandae alias sequi totam soluta natus iure eius, obcaecati sint
          dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
          voluptates iste cum totam, facere explicabo, fugit suscipit ratione
          aspernatur consequuntur ex mollitia quaerat?
        </p>

        <div className="flex justify-center my-8">
          <Link href="/tickets">
            <button className="btn-primary">View Tickets</button>
          </Link>
        </div>

        <h2>Company Updates</h2>

        <Card
          header="New member of the web dev team..."
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
            pariatur molestiae, modi beatae corrupti."
        />
        <Card
          header="New website live!"
          body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas."
        />
      </main>
    </>
  );
};

export default App;
