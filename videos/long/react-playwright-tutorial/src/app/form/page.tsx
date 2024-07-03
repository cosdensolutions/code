import Form from "@/components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
};

export default function FormPage() {
  return (
    <div>
      <Form />
    </div>
  );
}
