import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SuperScriptLogo from "@/components/common/super-script-logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center items-baseline text-[7em] my-10 font-bold">
        ShahTech
        <SuperScriptLogo width={150} />
      </h1>
      <div className="text-[1.25em]">
        <p className="my-5">
          ShahTech Inc empowers tech companies to connect with developer
          communities through expert Developer Relations (DevRel) services. We
          help your products reach the right audience by creating high-impact
          blogs, tutorials, video content, and delivering engaging conference
          presentations.
        </p>
        <p className="my-5">
          Beyond content creation, we also manage and grow your developer
          community, acting as a bridge between your product and its users. By
          gathering actionable feedback from developers, we help improve your
          product and build lasting relationships with your audience.
        </p>
        <p className="my-5">
          Whether you need a Developer Evangelist, Developer Advocate, or a
          full-fledged DevRel strategy, ShahTech Inc is your partner in building
          authentic, long-term engagement with the developer ecosystem.
        </p>
      </div>
      <h2 className="text-[2em] font-bold my-7">Services Provided</h2>
      <div className="flex flex-wrap gap-4 my-7">
        <Card className="flex-1 min-w-[45%]">
          <CardHeader>
            <CardTitle className="text-2xl">Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We craft high-impact technical blogs that not only inform but also
              inspire developer communities. Our expert writers dive deep into
              the nuances of your products, creating content that resonates with
              developers, whether it's a tutorial, how-to guide, or an in-depth
              product review. By translating complex technical concepts into
              easily digestible content, we help your product reach the right
              audience and build trust within the developer ecosystem. Let us
              tell your story and connect with developers in meaningful ways
              through compelling, well-researched blog posts.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://dev.to/busycaesar" target="_blank">
              <Button>Our Blogs</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex-1 min-w-[45%]">
          <CardHeader>
            <CardTitle className="text-2xl">Video Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We specialize in creating captivating video content that showcases
              your products in action. From detailed product demos and feature
              walkthroughs to tutorial videos, we ensure each piece of content
              is clear, engaging, and tailored to the developer audience. Our
              videos help simplify complex technical concepts, making it easier
              for developers to understand, adopt, and integrate your product.
              With our video content services, we elevate your brand and enhance
              developer engagement through high-quality, informative visual
              experiences.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/@busycaesar/videos"
              target="_blank"
            >
              <Button>Our Videos</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex-1 min-w-[45%]">
          <CardHeader>
            <CardTitle className="text-2xl">
              Conference/Meetup/Event Presentation and Webinars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We excel in delivering impactful conference, meetup, and event
              presentations that effectively communicate your product’s value to
              the developer community. Whether it's a live presentation, a
              virtual meetup, or an engaging webinar, we craft sessions that
              resonate with developers, providing them with practical insights
              and hands-on experience. Our expert speakers are skilled in
              presenting complex technical concepts in a clear, relatable
              manner, ensuring your message is not only heard but embraced by
              your audience. Through these interactive events, we help foster
              connections, drive product adoption, and strengthen your brand’s
              presence in the developer ecosystem.
            </p>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[45%]">
          <CardHeader>
            <CardTitle className="text-2xl">Community Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We actively engage with developer communities to gather valuable
              feedback that drives product improvement. By fostering open
              communication channels on platforms like forums, Slack, and
              Discord, we ensure developers' voices are heard and their insights
              are captured. We meticulously collect and analyze feedback, then
              relay it to your development team, ensuring that suggestions and
              pain points are addressed. This process not only enhances your
              product’s usability and functionality but also strengthens your
              relationship with the developer community, creating a cycle of
              continuous improvement and genuine engagement.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
