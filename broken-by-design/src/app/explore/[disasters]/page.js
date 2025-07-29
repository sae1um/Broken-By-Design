import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "../../../components/Header";
import Background from "@/components/background";

const componentMap = {
    ImpossibleButton: () => import("@/components/disasters/ImpossibleButton"),
};

export default async function DisasterPage({ params }) {
    const { disasters } = await params;
    const importer = componentMap[disasters];

    if (!importer) {
        notFound();
    }

    const DynamicComponent = await dynamic(importer);
    return (
        <div>
            <Background />
            <Header />
            <DynamicComponent />
        </div>
    );
}
