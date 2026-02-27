"use client";

import AnimatedNumbers from "react-animated-numbers";

const LabelWithCount = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="font-semibold flex flex-col items-center tracking-wider">
      <AnimatedNumbers
        transitions={(index) => ({
          type: "spring",
          duration: index + 1,
        })}
        animateToNumber={value}
        fontStyle={{
          fontSize: 40,
          textAlign: "center",
        }}
      />
      <h1 className="uppercase">{label}</h1>
    </div>
  );
};

export default LabelWithCount;
