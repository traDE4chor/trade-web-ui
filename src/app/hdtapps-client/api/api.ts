export * from './applications.service';
import { ApplicationsService } from './applications.service';
export * from './tasks.service';
import { TasksService } from './tasks.service';
export * from './transformations.service';
import { TransformationsService } from './transformations.service';
export const APIS = [ApplicationsService, TasksService, TransformationsService];
