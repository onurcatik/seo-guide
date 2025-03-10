import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/search-svgrepo-com.svg').default,
    description: (
      <>
       Search Engine Optimization (SEO) is the practice of optimizing websites to improve their visibility on search engines. It involves keyword optimization, content quality, site speed, mobile compatibility, and backlinks. When implemented correctly, SEO leads to increased organic traffic and higher rankings. 🚀
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/engine-motor-svgrepo-com.svg').default,
    description: (
      <>
        Search Engine Optimization (SEO) is the process of enhancing a website’s visibility in search engine results through strategic techniques such as keyword research, content optimization, technical improvements, and link building. Effective SEO increases organic traffic, improves user experience, and boosts online presence. 🚀






      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/doc-svgrepo-com.svg').default,
    description: (
      <>
       **SEO and Programming Languages** work together to enhance website visibility and performance. SEO optimizes content and structure, while coding ensures fast loading, clean architecture, and mobile responsiveness. Technologies like HTML, JavaScript, and Python improve search rankings, creating high-performing, search-friendly websites. 🚀
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
