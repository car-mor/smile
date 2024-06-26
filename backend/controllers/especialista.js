export class EspecialistaController {
  constructor (Modelos) {
    this.especialistaModel = Modelos.EspecialistaModel
  }

  obtenerTodosLosEspecialistas = async (req, res) => {
    const especialistas = await this.especialistaModel.obtenerTodosLosEspecialistas()
    res.json(especialistas)
  }

  obtenerEspecialistaPorId = async (req, res) => {
    const { id } = req.params

    const especialista = await this.especialistaModel.obtenerEspecialistaPorId(id)

    if (especialista) return res.json(especialista)

    res.status(404).json({ message: 'especialista no encontrado' })
  }

  obtenerEspecialistaPorTitulo = async (req, res) => {
    const { titulo } = req.params

    const especialista = await this.especialistaModel.obtenerEspecialistaPorTitulo(titulo)

    if (especialista) return res.json(especialista)

    res.status(404).json({ message: 'especialista no encontrado' })
  }

  obtenerEspecialistaPorModalidad = async (req, res) => {
    const { modalidad } = req.params

    const especialistas = await this.especialistaModel.obtenerEspecialistaPorModalidad(modalidad)

    if (especialistas) return res.json(especialistas)

    res.status(404).json({ message: 'especialista no encontrado' })
  }

  crearEspecialista = async (req, res) => {
    const nuevoEspecialista = await this.especialistaModel.crearEspecialista({ entrada: req.body })

    res.send(nuevoEspecialista)
  }

  eliminarEspecialistaPorId = async (req, res) => {
    const { id_Especialista } = req.body

    const eliminado = await this.especialistaModel.eliminarEspecialistaPorId(id_Especialista)

    res.send(eliminado)
  }
}
