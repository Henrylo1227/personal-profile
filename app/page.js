import PersonalDescription from "@/components/homePage/personalDescription/section";
import ProjectHighlight from "@/components/homePage/projectHighlight/section";

export default function Home() {
  return (
    <div className="grid scroll-smooth">
        <PersonalDescription/>
        <ProjectHighlight/>
    </div>
  )
}
