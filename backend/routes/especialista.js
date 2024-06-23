import { Router } from 'express'
import { EspecialistaController } from '../controllers/especialista.js'

export const EspecialistaRouter = (Modelos) => {
  const EspecialistaRouter = Router()
  const especialistaController = new EspecialistaController(Modelos)

  EspecialistaRouter.get('/', especialistaController.obtenerTodosLosEspecialistas)
  EspecialistaRouter.get('/:id', especialistaController.obtenerEspecialistaPorId)
  EspecialistaRouter.post('/crearEspecialista', especialistaController.crearEspecialista)
  EspecialistaRouter.post('/eliminarEspecialista', especialistaController.eliminarEspecialistaPorId)

  return EspecialistaRouter
}
