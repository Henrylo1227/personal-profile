import Background from "@/components/homePage/personalDescription/background";
import PersonalDescription from "@/components/homePage/personalDescription/personalDescription";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center bg-grey">
      <PersonalDescription/>
      <Background/>
    </div>
  )
}
