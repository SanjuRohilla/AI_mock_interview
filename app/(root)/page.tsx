import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {dummyInterviews} from "@/constants";
import {getCurrentUser, getInterviewByUserId, getLatestInterviews} from "@/lib/actions/auth.action";
const Page = async () => {
    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id!})
    ]);



    const hasPastInterviews = userInterviews?.length!> 0;
    const hasUpcomingInterviews = latestInterviews?.length! > 0;
    return (
      <>
        <section className = "card-cta">
            <div className = "flex flex-col gap-3 max-w-lg">
               <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
               <p className="text-lg">
                   Practice On real Interview questions & get
                   instant feedback
               </p>
                <Button asChild className="btn-primary max-sm:w-full">
                  <Link href="/interview" >
                      Start an Interview
                  </Link>
                </Button>
            </div>
            <Image src="/robot.png" alt="robo-dude" width={400} height={400}
            className="max-sm:hidden"
            />
        </section>
        <section className="flex flex-col gap-3 mt-3">
           <h2>Your Interviews</h2>

            <div className="interviews-section">
                {
                    hasPastInterviews ?(
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                            <p>You haven&apos;t taken any interviews yet</p>
                    )
                }
            </div>
        </section>
        <section className = "flex flex-col gap-3 mt-3">
            <h2>Take an Interview</h2>
            <div className = "interviews-section">

                {
                    hasUpcomingInterviews ?(
                        latestInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                        <p>There are no new interviews Available.</p>
                    )
                    // dummyInterviews.map((interview)=>(
                    //     <InterviewCard {...interview} key={interview.id} />
                    // ))
                }

            </div>

        </section>
      </>
  )
}

export default Page;