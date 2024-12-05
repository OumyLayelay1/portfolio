import React from 'react'
import TextOrange from "@/components/TextOrange";
import Text from "@/components/Text";
import Form from 'next/form'
import { Input, Textarea } from '@/components/Input';
import Button from '@/components/Button';

const Page = () => {
  return (
    <div className="text-white flex flex-col gap-6">
    <div className="">
    <Text
      text={"Contactez-"}
      className="text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"
    >
      <TextOrange name={"moi"} />
    </Text>
    <Text text={"Prenons contact !"} className={"text-16px md:text-center sm:text-center lg:text-center pt-3"}/>
    </div>
    <Form>
        <div className="grid grid-cols-12">
            <div className="col-span-6 sm:col-span-12 md:col-span-12">
            <Input label={"Email"} type={"email"}/>
            </div>
            <div className="col-span-6 sm:col-span-12 md:col-span-12">
            <Input label={"Téléphone"} type={"number"}/>
            </div>
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-6 sm:col-span-12 md:col-span-12">
            <Input label={"Nom"} type={"text"}/>
            </div>
            <div className="col-span-6 sm:col-span-12 md:col-span-12">
            <Input label={"Adresse"} type={"text"}/>
            </div>
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-6 sm:col-span-12 md:col-span-12">
        <Textarea label={"Message"} rows={"3"} cols={"6"}/>
            </div>
        </div>
        <div className="grid grid-cols-12 sm:flex md:flex lg:flex justify-center lg:justify-start">
        <Button type={"submit"} className="mx-4">
        <Text
            text={"Soumettre"}
            className={
              "font-lohit text-[#1D1C1D] text-[22px] xl:text-[16px]"
            }
          />
        </Button>
        </div>
    </Form>
    </div>
  )
}

export default Page
