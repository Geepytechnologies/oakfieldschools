import React from "react";

type Props = {};

const Vision = (props: Props) => {
  return (
    <div className="flex flex-col font-mont md:flex-row gap-7 mt-[50px]">
      <div className="min-h-[500px] min-w-[300px] md:min-h-[500px] md:min-w-[500px] relative">
        <img src={"/none.png"} alt="lady" className="object-cover " />
      </div>
      {/* about */}
      <div className="p-2">
        <p className="text-first font-[600] font-mont text-[35px]">About Us</p>
        <div className="flex gap-3 flex-col">
          <p>
            Oakfield Intl Schools is a renowned educational institution known
            for its commitment to academic excellence, fostering a supportive
            learning environment, and nurturing the holistic development of its
            students. Situated in a picturesque location, Oakfield Intl Schools
            offers a conducive atmosphere that inspires and encourages students
            to reach their full potential.
          </p>
          <p>
            Established with a rich history dating back several decades,
            Oakfield Intl Schools has consistently maintained a strong tradition
            of providing high-quality education. The school prides itself on its
            dedicated faculty of experienced educators who are not only experts
            in their respective fields but also passionate about shaping young
            minds and empowering students with knowledge.
          </p>
          <p>
            At Oakfield Intl Schools, the focus goes beyond mere academics. The
            school firmly believes in the importance of extracurricular
            activities and co-curricular programs, which play a vital role in
            nurturing the talents and interests of students. Whether it be
            sports, arts, music, drama, or various clubs, students are
            encouraged to explore their passions and develop valuable life
            skills.
          </p>
          <p>
            A strong sense of community pervades throughout Oakfield High
            School. The school fosters an inclusive and diverse environment,
            where students from all backgrounds come together to learn, grow,
            and form lifelong friendships. Through various initiatives and
            community service projects, students are instilled with the values
            of empathy, compassion, and social responsibility.
          </p>
          <p>
            Technology integration is another hallmark of Oakfield Intl Schools.
            The institution leverages modern teaching methodologies and
            state-of-the-art facilities to enhance the learning experience. From
            well-equipped classrooms to advanced laboratories and digital
            resources, the school ensures that students are well-prepared to
            thrive in an ever-evolving world.
          </p>
        </div>
        {/* vision */}
        <div className="my-3">
          <p className="text-first font-[600] font-mont text-[35px]">Mission</p>
          <h2>
            Nurturing students, challenging and inspiring them to become
            confident, responsible, and lifelong learners.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Vision;
