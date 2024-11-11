// pages/project1.tsx
import Image from 'next/image';
import Link from 'next/link';

const Project1 = () => {
  return (
    <div className="project-details">
      <h1>Personal Blog</h1>
      <div className="project-image">
        <Image src="/images/personal blog.webp" alt="Personal Blog" width={600} height={300} />
      </div>
      <div className="project-description">
        <p>This is a responsive personal blog built using React and Node.js. It is designed to be mobile-friendly and fully responsive.</p>
        <p>Technologies Used:</p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>CSS (for styling)</li>
        </ul>
        <p>Click <Link href="https://github.com/your-repository-link">here</Link> to view the source code on GitHub.</p>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Project1;
