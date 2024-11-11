// pages/project2.tsx
import Image from 'next/image';
import Link from 'next/link';

const Project2 = () => {
  return (
    <div className="project-details">
      <h1>E-Commerce Website</h1>
      <div className="project-image">
        <Image src="/images/ecommerce.jpeg" alt="E-Commerce Website" width={600} height={300} />
      </div>
      <div className="project-description">
        <p>This is a full-stack e-commerce platform with a payment gateway integration. It allows users to browse products, add them to the cart, and make secure payments.</p>
        <p>Technologies Used:</p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Stripe API</li>
          <li>MongoDB</li>
        </ul>
        <p>Click <Link href="https://github.com/your-repository-link">here</Link> to view the source code on GitHub.</p>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Project2;
