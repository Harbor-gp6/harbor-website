

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function TimelineCustom() {
  return (
    <Timeline>
        <h1 className="text-xl pb-5 flex justify-center">
            Atendimentos (Hoje)
        </h1>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        12:30
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>R$40,00</Timeline.Title>
          <Timeline.Body>
          Corte de Cabelo
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        12:30
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>R$40,00</Timeline.Title>
          <Timeline.Body>
          Corte de Cabelo
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        12:30
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>R$40,00</Timeline.Title>
          <Timeline.Body>
          Corte de Cabelo
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        12:30
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>R$40,00</Timeline.Title>
          <Timeline.Body>
          Corte de Cabelo
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        12:30
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>R$40,00</Timeline.Title>
          <Timeline.Body>
          Corte de Cabelo
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      
    </Timeline>
  );
}
